import { useState, useEffect, useRef } from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  Loader2,
  AlertCircle,
  Github,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Assure-toi que motion est bien importé et utilisé.

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentSectionRef) {
            observer.unobserve(currentSectionRef);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => { // Rendu asynchrone pour utiliser await
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      // Appel réel à Formspree
      const response = await fetch("https://formspree.io/f/xzzrwwww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        toast({
          title: "Message envoyé !",
          description:
            "Merci pour votre message. Je vous réponds dans les plus brefs délais.",
          variant: "success",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setFormStatus("error");
        // Tentative de récupérer un message d'erreur de Formspree
        const errorData = await response.json();
        toast({
          title: "Erreur lors de l'envoi",
          description:
            errorData.error || "Un problème est survenu. Veuillez réessayer plus tard.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setFormStatus("error");
      toast({
        title: "Erreur réseau",
        description:
          "Impossible de se connecter au serveur. Vérifiez votre connexion.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      // Réinitialise le statut après un court délai pour que l'icône de succès/erreur disparaisse
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "contact@alidabo.site",
      href: "mailto:contact@alidabo.site",
      type: "link",
      color: "from-primary/20 to-blue-400/20",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Téléphone",
      value: "+224 07-10-14-58-64",
      href: "tel:+2240710145864",
      type: "link",
      color: "from-blue-500/20 to-purple-400/20",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      href: null,
      type: "text",
      color: "from-purple-500/20 to-pink-400/20",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      title: "Réseaux sociaux",
      type: "social",
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/alsondab",
          icon: (
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          ),
        },
        {
          name: "GitHub",
          href: "https://github.com/alsondab",
          icon: (
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          ),
        },
      ],
      color: "from-green-500/20 to-teal-400/20",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Parlons de votre projet
          </div>
          <h2 className="text-4xl md:text-5xl font-bold relative">
            Entrer en <span className="text-primary">Contact</span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-primary/40 to-primary rounded-full"></div>
          </h2>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto text-lg">
            Avez-vous un projet en tête ou souhaitez-vous collaborer ? N'hésitez
            pas à me contacter. Je suis toujours ouvert à discuter de nouvelles
            opportunités.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-8">
              Mes coordonnées
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                  ></div>
                  <div className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">
                          {item.title}
                        </h4>
                        {item.type === "link" && item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors group-hover:text-foreground flex items-center gap-1"
                            target={
                              item.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {item.value}
                            {item.href.startsWith("http") && (
                              <ExternalLink size={14} className="flex-shrink-0" />
                            )}
                          </a>
                        ) : item.type === "text" ? (
                          <span className="text-muted-foreground group-hover:text-foreground">
                            {item.value}
                          </span>
                        ) : item.type === "social" && item.links ? (
                          <div className="flex flex-wrap gap-3 mt-2">
                            {item.links.map((socialLink, socialIndex) => (
                              <a
                                key={socialIndex}
                                href={socialLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors hover:scale-105 active:scale-95 duration-200"
                              >
                                {socialLink.icon}
                                <span className="text-sm">
                                  {socialLink.name}
                                </span>
                                <ExternalLink size={14} className="flex-shrink-0" />
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="relative p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Envoyez un message</h3>

              <form
                method="POST" // La méthode doit être POST pour Formspree
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Comment vous appelez-vous ?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name" // Important pour Formspree
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.name ? "border-red-500" : "border-input"
                      )}
                      placeholder="Ali Dabo..."
                    />
                    {errors.name && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle size={18} />
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Quel est votre email ?
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email" // Important pour Formspree, Formspree gère aussi _replyto automatiquement
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.email ? "border-red-500" : "border-input"
                      )}
                      placeholder="contact@alidabo.site"
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle size={18} />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Votre message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message" // Important pour Formspree
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
                        errors.message ? "border-red-500" : "border-input"
                      )}
                      placeholder="Bonjour, j'aimerais discuter d'un projet..."
                    />
                    {errors.message && (
                      <div className="absolute right-3 top-5 text-red-500">
                        <AlertCircle size={18} />
                      </div>
                    )}
                  </div>
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <Check size={18} />
                      <span>Message envoyé</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};