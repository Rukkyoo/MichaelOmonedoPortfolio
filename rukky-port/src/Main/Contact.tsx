"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, formRef.current, socialRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        // Animate form with a slight delay
        .to(
          formRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Animate social icons
        .to(
          socialRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Animate form fields individually on scroll
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      });

      // Animate social icons individually
      /* gsap.from(".social-icon", {
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: 180,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.5,
      }); */

      // Form input focus animations
      const inputs = document.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        input.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Button hover animations
      const submitButton = document.querySelector(".submit-button");
      if (submitButton) {
        submitButton.addEventListener("mouseenter", () => {
          gsap.to(submitButton, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        submitButton.addEventListener("mouseleave", () => {
          gsap.to(submitButton, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Social icon hover animations
      document.querySelectorAll(".social-icon").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(() => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
          if (formRef.current) {
            formRef.current.reset();
          }
        });
    } else {
      console.error("Form reference is null.");
    }
  };

  return (
    <div
      ref={contactRef}
      id="contact"
      className="mt-10 flex flex-col items-center"
    >
      <h3 ref={titleRef} className="text-2xl font-bold mb-8 lg:text-4xl">
        Contact Me
      </h3>

      <div className="flex flex-col items-center">
        <form
          ref={formRef}
          className="w-[90vw] border-zinc-300 rounded-md border-2 p-6 lg:w-[60vw]"
          onSubmit={sendEmail}
        >
          <div className="form-field mb-4">
            <label htmlFor="name" className="block text-zinc-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-3 py-2 bg-zinc-200 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-field mb-4">
            <label htmlFor="email" className="block text-zinc-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="w-full px-3 py-2 bg-zinc-200 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-field mb-6">
            <label htmlFor="message" className="block text-zinc-700 mb-2">
              Your Message
            </label>
            <textarea
              name="user_message"
              id="message"
              rows={4}
              className="w-full px-3 py-2 bg-zinc-200 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button w-full bg-black text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
          <ToastContainer className="absolute top-0 right-0" />
        </form>

        <div ref={socialRef} className="flex gap-6 mt-4">
          <a
            href="mailto:michaelomonedo001@gmail.com"
            className="social-icon text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="Email"
          >
            <SiGmail size={24} />
          </a>
          <a
            href="http://linkedin.com/in/michael-omonedo/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://x.com/Wazzaaah_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://github.com/Rukkyoo"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
