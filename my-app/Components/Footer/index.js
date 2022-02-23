import css from "../../styles/footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div>
          <p className={css.footerText}>LogoLogo</p>
          <p className={css.footerText}>&copy; SalVeg</p>
        </div>
        <div>
          <p className={css.footerText}>LogoLogo</p>
          <p className={css.footerText}>&copy; SalVeg</p>
        </div>
        <div>
          <p className={css.footerText}>LogoLogo</p>
          <p className={css.footerText}>&copy; SalVeg</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
