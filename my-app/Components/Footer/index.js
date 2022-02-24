import css from "../../styles/footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div>
          <div className={css.footerText}>
            <div className={css.socialMedia}>
              <InstagramIcon /> <TwitterIcon /> <FacebookIcon />{" "}
              <LinkedInIcon />
            </div>
            <p className={css.footerText}>&copy; SalVeg</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import css from "../../styles/footer.module.css";
// function Footer() {
//   return (
//     <div className={css.footer}>
//       <div className={css.socialMedia}>
//         <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
//       </div>
//       <p> &copy; 2021 SalVeg.com</p>
//     </div>
//   );
// }
// export default Footer;
