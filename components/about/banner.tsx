import { ArrowRight, MapPin, Phone } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ABOUT_PAGE_BANNER_BUTTONS } from "@/lib/constants/general";
import { getMarketingBlocks, getTenant } from "@/lib/services/firestore/queries";
import { getTenantSlug } from "@/lib/config/tenant";
import { formatAddressInline } from "@/lib/utils/format-tenant";
import {
  ABOUT_HERO_STAT_ICONS,
  ABOUT_HERO_BADGE_STYLES,
} from "@/lib/utils/marketing-present";

export default async function Banner() {
  const slug = getTenantSlug();
  const [marketing, tenant] = await Promise.all([
    getMarketingBlocks(slug),
    getTenant(slug),
  ]);

  const heroStats = marketing?.aboutHeroStats ?? [];
  const heroBadges = marketing?.aboutHeroBadges ?? [];
  const pharmacyFirstWord =
    tenant?.displayName?.split(" ")[0] ?? "Lowfield";
  const day = new Date().getDay();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[url('/elements/pattern-2.svg')] bg-cover bg-center">
      <div className="absolute inset-0" />
      <WidthConstraint className="relative z-10 mt-34 sm:mt-[5%]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 bg-background">
            <div className="flex flex-wrap gap-3">
              {heroBadges.map((badge, index) => {
                const style = ABOUT_HERO_BADGE_STYLES[index % ABOUT_HERO_BADGE_STYLES.length]!;
                const IconComponent = style.icon;
                return (
                  <Badge
                    key={index}
                    className={`inline-flex items-center gap-2 ${style.textColor} text-sm font-semibold ${style.bgColor} py-2 px-4 ${style.borderColor} backdrop-blur-sm`}
                  >
                    <IconComponent className="size-4" />
                    {badge.text}
                  </Badge>
                );
              })}
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
                About{" "}
                <span className="text-primary relative inline-block">
                  {pharmacyFirstWord}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M2 6C50 2 150 2 198 6"
                      stroke="#F9A825"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                <span className="text-foreground/90">Pharmacy</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Providing accessible healthcare and personalized service to our
                community with a commitment to excellence and compassion.
              </p>
            </div>

            {/* Nav buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {ABOUT_PAGE_BANNER_BUTTONS.map((btn, index) => {
                const isPrimary = btn.variant === "primary";
                return (
                  <Button
                    key={index}
                    asChild
                    variant={isPrimary ? "default" : "outline"}
                    size="lg"
                    className={
                      isPrimary
                        ? "group bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-95"
                        : "hover:bg-white hover:-translate-y-1 backdrop-blur-sm px-8 py-6 rounded-xl font-semibold transition-all duration-300"
                    }
                  >
                    <Link href={btn.href} className="flex items-center gap-2">
                      {btn.text}
                      {isPrimary && (
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </Link>
                  </Button>
                );
              })}
            </div>

            {/* Contact Info Row */}
            {tenant && (
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm">{formatAddressInline(tenant)}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="size-4 text-primary" />
                  <span className="text-sm">{tenant.phone}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Side — pre-merge tilted insight card */}
          <div className="hidden lg:block pb-10">
            <div className="relative py-12">
              <div className="relative overflow-hidden border border-border rounded-3xl p-8 shadow-xl bg-card dark:bg-background/90 max-w-xl -rotate-10 mx-auto">
                <div className="relative flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/logo/lowfield-logo.png"
                      alt="Lowfield Pharmacy"
                      width={56}
                      height={56}
                      className="rounded-xl shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {tenant?.displayName ?? "Lowfield Pharmacy"}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-xs text-muted-foreground font-medium">
                          {day !== 0 && day !== 6
                            ? " Open today until 6:30pm"
                            : day === 6
                              ? "Open today until 2:00pm"
                              : "Closed for today"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Badge className="font-medium px-2 py-1 rounded-md border-0 bg-cyan-600/70 text-white">
                    NHS ACCREDITED
                  </Badge>
                </div>

                <div className="space-y-3 relative z-10">
                  {heroStats.map((stat, index) => {
                    const Icon =
                      ABOUT_HERO_STAT_ICONS[index % ABOUT_HERO_STAT_ICONS.length]!;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-card backdrop-blur-lg p-3 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 border border-border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-primary/80 text-white rounded-lg">
                            <Icon className="size-5" />
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                        <p className="text-xl font-medium text-foreground">
                          {stat.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-emerald-600 font-bold mr-1">
                      Our Mission:
                    </span>
                    To provide accessible, compassionate healthcare to every
                    member of our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-12 pb-10 lg:hidden">
          {heroStats.map((stat, index) => {
            const Icon = ABOUT_HERO_STAT_ICONS[index % ABOUT_HERO_STAT_ICONS.length]!;
            return (
              <div
                key={index}
                className="bg-card backdrop-blur-sm border border-border rounded-xl p-4 text-center"
              >
                <Icon className="size-5 text-primary mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
}
