// src/components/Footer.jsx
import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { useTranslation } from "react-i18next"

function Footer() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <footer className="w-screen bg-white border-t border-gray-200 shadow-lg">
      {/* Map */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.0042082619456!2d55.420918!3d25.346300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5930f83e68a3%3A0x9e36d7b86e1f36a4!2sIndustrial%20Area%2015%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1693938300000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:grid max-w-screen-xl mx-auto px-6 grid-cols-4 gap-8 py-8">
        {/* Col 1 */}
        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.usefulLinks")}</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#privacy" className="hover:text-blue-900">{t("footer.privacy")}</a></li>
            <li><a href="#services" className="hover:text-blue-900">{t("nav.services")}</a></li>
            <li><a href="#gallery" className="hover:text-blue-900">{t("nav.gallery")}</a></li>
            <li><a href="#testimonials" className="hover:text-blue-900">{t("nav.testimonials")}</a></li>
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.more")}</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#home" className="hover:text-blue-900">{t("nav.home")}</a></li>
            <li><a href="#aboutus" className="hover:text-blue-900">{t("nav.about")}</a></li>
            <li><a href="#videos" className="hover:text-blue-900">{t("nav.videos")}</a></li>
            <li><a href="#contactus" className="hover:text-blue-900">{t("nav.contact")}</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.contact")}</h4>
          <p className="text-sm text-gray-600">
            <a
              href="https://maps.app.goo.gl/3CcCH556HBTSRaUz6"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-900"
            >
              {t("footer.address")}
            </a>
          </p>
          <p className="text-sm text-gray-600">
            <a href="tel:+971585328151" className="hover:text-blue-900">+971 585 328 151</a>
            {" · "}
            <a href="https://wa.me/971585328151" className="hover:text-green-600">{t("footer.whatsapp")}</a>
          </p>
          <p className="text-sm text-gray-600">alhadafmetalcoating@gmail.com</p>
          <p className="text-sm text-gray-600">info@alhadafmetalcoating.com</p>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.connect")}</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="w-6 h-6 text-pink-600 hover:opacity-80" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="w-6 h-6 text-blue-700 hover:opacity-80" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="w-6 h-6 text-cyan-500 hover:opacity-80" />
            </a>
            <a href="https://wa.me/971585328151" target="_blank" rel="noreferrer">
              <FaWhatsapp className="w-6 h-6 text-green-600 hover:opacity-80" />
            </a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {t("footer.changeLang")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("ar")}>العربية</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("hi")}>हिन्दी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden max-w-screen-md mx-auto px-6 flex flex-col space-y-6 py-6">
        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.usefulLinks")}</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#privacy" className="hover:text-blue-900">{t("footer.privacy")}</a></li>
            <li><a href="#services" className="hover:text-blue-900">{t("nav.services")}</a></li>
            <li><a href="#gallery" className="hover:text-blue-900">{t("nav.gallery")}</a></li>
            <li><a href="#testimonials" className="hover:text-blue-900">{t("nav.testimonials")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.more")}</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#home" className="hover:text-blue-900">{t("nav.home")}</a></li>
            <li><a href="#aboutus" className="hover:text-blue-900">{t("nav.about")}</a></li>
            <li><a href="#videos" className="hover:text-blue-900">{t("nav.videos")}</a></li>
            <li><a href="#contactus" className="hover:text-blue-900">{t("nav.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.contact")}</h4>
          <p className="text-sm text-gray-600">
            <a
              href="https://maps.app.goo.gl/3CcCH556HBTSRaUz6"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-900"
            >
              {t("footer.address")}
            </a>
          </p>
          <p className="text-sm text-gray-600">
            <a href="tel:+971585328151" className="hover:text-blue-900">+971 585 328 151</a>
            {" · "}
            <a href="https://wa.me/971585328151" className="hover:text-green-600">{t("footer.whatsapp")}</a>
          </p>
          <p className="text-sm text-gray-600">alhadafmetalcoating@gmail.com</p>
          <p className="text-sm text-gray-600">info@alhadafmetalcoating.com</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">{t("footer.connect")}</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="w-6 h-6 text-pink-600 hover:opacity-80" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="w-6 h-6 text-blue-700 hover:opacity-80" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="w-6 h-6 text-cyan-500 hover:opacity-80" />
            </a>
            <a href="https://wa.me/971585328151" target="_blank" rel="noreferrer">
              <FaWhatsapp className="w-6 h-6 text-green-600 hover:opacity-80" />
            </a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {t("footer.changeLang")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("ar")}>العربية</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("hi")}>हिन्दी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator />
      <div className="text-center text-sm text-gray-600 py-4">
        © {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}
      </div>
    </footer>
  )
}

export default Footer
