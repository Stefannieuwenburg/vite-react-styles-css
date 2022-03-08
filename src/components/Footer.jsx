import FooterStyles from "./Footer.module.css";

export default function Footer() {
    const today = new Date();
    return (
        <footer className={FooterStyles.Footer}>
            <p className={FooterStyles.p}>
                Copyright &copy; {today.getFullYear()}
            </p>
        </footer>
    );
}
 
