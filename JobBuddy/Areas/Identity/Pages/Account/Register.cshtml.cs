using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using JobBuddy.Data.Repositories;
using JobBuddy.Data.Repositories.IRepositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using JobBuddy.Models;
using JobBuddy.Models.UserDetails;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;

namespace JobBuddy.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class RegisterModel : PageModel
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<RegisterModel> _logger;
        private readonly IEmailSender _emailSender;
        private readonly IClientRepository _clientRepository;
        private readonly IHrDetailsRepository _hrRepository;
        private readonly IMentorRepository _mentorRepository;
        private readonly IAdministratorDetailsRepository _administratorDetailsRepository;

        public RegisterModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IClientRepository clientRepository,
            IHrDetailsRepository HrRepository,
            IMentorRepository mentorRepository,
            ILogger<RegisterModel> logger,
            IEmailSender emailSender)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _emailSender = emailSender;
            _clientRepository = clientRepository;
            _hrRepository = HrRepository;
            _mentorRepository = mentorRepository;
        }

        [BindProperty]
        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        public IList<AuthenticationScheme> ExternalLogins { get; set; }

        public class InputModel
        {
            [Required]
            [MaxLength(50)]
            [Display(Name = "First Name")]
            public string FirstName { get; set; }

            [Required]
            [MaxLength(50)]
            [Display(Name = "Last Name")]
            public string LastName { get; set; }

            [Required]
            [EmailAddress]
            [Display(Name = "Email")]
            public string Email { get; set; }

            [Required]
            [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
            [DataType(DataType.Password)]
            [RegularExpression(@"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$",
                ErrorMessage = "Password must have at least one Upper case, Lower case, Number and Special Character.")]
            [Display(Name = "Password")]
            public string Password { get; set; }

            [DataType(DataType.Password)]
            [Display(Name = "Confirm password")]
            [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
            public string ConfirmPassword { get; set; }

            [Required]
            [Display(Name = "Role")]
            public string UserRole { get; set; }
        }

        public async Task OnGetAsync(string returnUrl = null)
        {
            ReturnUrl = returnUrl;
            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");
            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser
                {
                    FirstName = Input.FirstName, 
                    LastName = Input.LastName, 
                    UserName = Input.Email,
                    Email = Input.Email,
                    UserRole = Input.UserRole
                };
               
                var result = await _userManager.CreateAsync(user, Input.Password);
                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");

                    var userId = _userManager.Users.SingleOrDefault(i => i.Email == user.Email).Id;

                    var role = Input.UserRole;

                    switch (role)
                    {
                        case "Client":

                            if (userId != null)
                            {
                                var client = new ClientUserDetails
                                {
                                    ApplicationUserId = userId
                                };
                                _clientRepository.AddClient(client);
                            }
                            break;

                        case "Mentor":
                            if (userId != null)
                            {
                                var mentor = new MentorUserDetails
                                {
                                    ApplicationUserId = userId
                                };
                                _mentorRepository.AddMentor(mentor);
                            }
                            break;

                        case "HR":
                            if (userId != null)
                            {
                                var HR = new HrUserDetails
                                {
                                    ApplicationUserId = userId
                                };
                                _hrRepository.AddHr(HR);
                            }
                            break;

                        case "Admin":
                            if (userId != null)
                            {
                                var admin = new AdministratorDetails
                                {
                                    ApplicationUserId = userId
                                };
                                _administratorDetailsRepository.AddAdministrator(admin);
                            }
                            break;
                    }
                    
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        pageHandler: null,
                        values: new { area = "Identity", userId = user.Id, code = code },
                        protocol: Request.Scheme);

                    await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
                        $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

                    //Προσθέτω μετά το Register το User στο Role εγγραφή στον ενδιάμεσο πίνακα Σπυροσσ

                    await _userManager.AddToRoleAsync(user, Input.UserRole);


                    if (_userManager.Options.SignIn.RequireConfirmedAccount)
                    {
                        return RedirectToPage("RegisterConfirmation", new { email = Input.Email });
                    }
                    else
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                        return LocalRedirect(returnUrl);
                    }

                    
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("Error", error.Description);
                }
            }

            // If we got this far, something failed, redisplay form
            return Page();
        }
    }
}
