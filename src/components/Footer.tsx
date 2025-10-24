import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, QrCode } from "lucide-react";
import qrCode from "@/assets/qrCode.jpg"

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">
              Thatta Anit-Narcotics
            </h3>
            <p className="text-sm text-muted-foreground">
              Working together to make Thatta drug-free. A community initiative
              to save families and futures.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link
                to="/crisis"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                The Crisis
              </Link>
              <Link
                to="/impact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Family Impact
              </Link>
              <Link
                to="/help"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Get Help
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get Involved</h4>
            <div className="flex flex-col space-y-2">
              <Link
                to="/donate"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Donate
              </Link>
              <Link
                to="/join"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Join Us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link
                to="/Team"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Thatta, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@thattaanitnarcotics.pk</span>
              </div>
              <div className="flex items-start flex-col   -space-x-6">
                <div className="flex items-center">

                <QrCode className="h-4 w-4 text-primary" />
                <span> scan QR code</span>
                </div>
                <div>

                <img src={qrCode} alt="" className="w-16 ml-11"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with{" "}
            <Heart className="h-4 w-4 text-destructive fill-current" /> for a
            better Thatta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
