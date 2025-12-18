import { Mail, MessageCircle } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import { Badge } from "../ui/badge";
import Image from "next/image";
import contactUs from "@/public/ui/contact-us.jpg";
import Link from "next/link";
import { BUSINESS_PROFILE, EXTERNAL_LINKS } from "@/lib/constants/general";

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <Image
        src={contactUs}
        alt="contact"
        className="absolute inset-0 w-full bg-center bg-cover z-0"
      />
      <div className="absolute inset-0 w-full h-full bg-black/70 dark:bg-black/85" />
      <WidthConstraint className="relative z-10 mb-6  pt-34 sm:pt-[10%}">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge className="inline-flex items-center gap-2 text-white text-sm font-semibold bg-primary/10 py-2.5 px-5 border-primary/30 backdrop-blur-lg shadow-lg shadow-white/10">
            <MessageCircle className="size-4" />
            Get in Touch
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto">
            We're here to help. Reach out to our team with any questions or
            concerns about your healthcare needs.
          </p>

          {/* Quick Contact */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="size-5 text-primary" />
              <Link href={EXTERNAL_LINKS.socials.email}>
                {BUSINESS_PROFILE.email}
              </Link>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
