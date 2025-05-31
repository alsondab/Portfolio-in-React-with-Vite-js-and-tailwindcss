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
  Share2,
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
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: "Email",
      value: "contact@alidabo.site",
      href: "mailto:contact@alidabo.site",
      type: "link",
      color: "from-blue-500/10 via-blue-400/5 to-blue-500/10",
      hoverColor: "group-hover:from-blue-500/20 group-hover:via-blue-400/15 group-hover:to-blue-500/20"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-500" />,
      title: "Téléphone",
      value: "+224 07-10-14-58-64",
      href: "tel:+2240710145864",
      type: "link",
      color: "from-green-500/10 via-green-400/5 to-green-500/10",
      hoverColor: "group-hover:from-green-500/20 group-hover:via-green-400/15 group-hover:to-green-500/20"
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-500" />,
      title: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      href: null,
      type: "text",
      color: "from-purple-500/10 via-purple-400/5 to-purple-500/10",
      hoverColor: "group-hover:from-purple-500/20 group-hover:via-purple-400/15 group-hover:to-purple-500/20"
    },
    {
      icon: <Share2 className="h-6 w-6 text-rose-500" />,
      title: "Réseaux sociaux",
      type: "social",
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/alsondab",
          icon: (
            <Linkedin className="h-5 w-5 text-indigo-500 opacity-75 group-hover:opacity-100 transition-opacity" />
          ),
        },
        {
          name: "GitHub",
          href: "https://github.com/alsondab",
          icon: (
            <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 opacity-75 group-hover:opacity-100 transition-opacity" />
          ),
        },
      ],
      color: "from-rose-500/10 via-rose-400/5 to-rose-500/10",
      hoverColor: "group-hover:from-rose-500/20 group-hover:via-rose-400/15 group-hover:to-rose-500/20"
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4 border border-blue-500/10">
            Parlons de votre projet
          </div>
          <h2 className="text-4xl md:text-5xl font-bold relative mb-8">
            Entrer en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Contact</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            Avez-vous un projet en tête ou souhaitez-vous collaborer ? N'hésitez
            pas à me contacter. Je suis toujours ouvert à discuter de nouvelles
            opportunités.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
              {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group p-6 rounded-2xl bg-gradient-to-br transition-all duration-300",
                item.color,
                item.hoverColor,
                "border border-gray-200/20 dark:border-gray-800/20 backdrop-blur-sm",
                "hover:shadow-lg hover:-translate-y-1"
              )}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-sm">
                        {item.icon}
                      </div>
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  {item.type === "social" ? (
                    <div className="flex justify-center gap-4 mt-2">
                      {item.links.map((link, linkIndex) => (
                              <a
                          key={linkIndex}
                          href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                          className="group/link p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                          {link.icon}
                          <span className="sr-only">{link.name}</span>
                              </a>
                            ))}
                    </div>
                  ) : (
                    item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group/link"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.value}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.value}</span>
                    )
                  )}
                </div>
            </div>
            </motion.div>
          ))}
          </motion.div>

        {/* Contact form */}
        <motion.div
          className="lg:col-span-2"
          variants={itemVariants}
        >
          <div className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 gap-6">
                {/* Name input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nom complet
                  </label>
                    <input
                      type="text"
                      id="name"
                    name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                      "w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "placeholder:text-muted-foreground/60",
                      errors.name && "border-red-500/50 focus:ring-red-500/20 focus:border-red-500/30"
                    )}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                    <input
                      type="email"
                      id="email"
                    name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                      "w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "placeholder:text-muted-foreground/60",
                      errors.email && "border-red-500/50 focus:ring-red-500/20 focus:border-red-500/30"
                    )}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                    <textarea
                      id="message"
                    name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={cn(
                      "w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "placeholder:text-muted-foreground/60",
                      errors.message && "border-red-500/50 focus:ring-red-500/20 focus:border-red-500/30"
                      )}
                    placeholder="Votre message..."
                    />
                  {errors.message && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>
                </div>

              {/* Submit button */}
              <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                  "w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium",
                  "flex items-center justify-center gap-2",
                  "transition-all duration-300 transform",
                  "hover:shadow-lg hover:shadow-primary/20",
                  "disabled:opacity-70 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                    <Check className="w-4 h-4" />
                    Message envoyé !
                  </>
                ) : formStatus === "error" ? (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Erreur, réessayer
                    </>
                  ) : (
                    <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                    </>
                  )}
              </button>
              </form>
            </div>
        </motion.div>
      </div>
    </section>
  );
};