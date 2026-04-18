import WidthConstraint from "../shared/width-constraint";

export default function Map() {
  return (
    <section>
      <WidthConstraint className="space-y-5">
        <div className="text-center">
          <h2 className="text-section-header font-bold tracking-tight">
            Find Us
          </h2>
          <p className="sm:text-card-title text-muted-foreground">
            Visit our pharmacy at Lowfield Road, South Croydon, London CR2 0JL
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden aspect-video max-w-6xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.30384878113!2d0.2158301!3d51.44215179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b1921179eccb%3A0xcc3a687003e9feee!2sLowfield%20Pharmacy%20-%20Travel%20Clinic%20%26%20Weight%20Loss%20Clinic!5e1!3m2!1sen!2sgh!4v1766055485379!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lowfield Pharmacy Location"
            className="w-full"
          ></iframe>
        </div>
      </WidthConstraint>
    </section>
  );
}
