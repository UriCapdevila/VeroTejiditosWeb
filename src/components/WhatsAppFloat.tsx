import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/5401164667963?text=Hola!%20Me%20interesa%20un%20amigurumi%20%F0%9F%92%9C";

  return (
    <div className="whatsapp-float">
      <Button
        variant="whatsapp"
        size="icon"
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl"
        title="Escribinos por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;