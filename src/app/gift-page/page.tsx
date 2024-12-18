import { Gift, Heart, Smile } from "lucide-react";
import Link from "next/link";

export default function GiftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-rose-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
        {/* Cabeçalho */}
        <div className="bg-rose-500 text-white p-6 text-center">
          <Gift className="mx-auto mb-4" size={64} />
          <h1 className="text-3xl font-bold">Feliz Aniversário, Amor! 🎉</h1>
        </div>

        {/* Resto do código permanece o mesmo */}
        <div className="p-6 space-y-6">
          {/* Revelação do Presente */}
          <div className="bg-rose-50 rounded-xl p-4 text-center">
            <h2 className="text-2xl font-semibold text-rose-700 mb-4">
              Seu Presente Especial
            </h2>
            <p className="text-rose-600 text-lg">
              ASSINATURA ANUAL <strong>CREW APP</strong>! 💕
            </p>
          </div>

          {/* Detalhes do Presente */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-rose-100 p-4 rounded-xl">
              <Smile className="text-rose-600" size={32} />
              <div>
                <h3 className="font-semibold text-rose-800">
                  Vamos começar a vida malhadora
                </h3>
                <Link
                  href="https://www.vempracreww.com.br/crewapp-pv"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-800 underline transition-colors"
                >
                  Clique aqui para mais detalhes
                </Link>
              </div>
            </div>
          </div>

          {/* Mensagem Pessoal */}
          <div className="bg-rose-50 p-4 rounded-xl text-center">
            <Heart className="mx-auto mb-4 text-rose-500" size={40} />
            <p className="text-rose-700 italic">
              Cada momento ao seu lado é um presente. Feliz aniversário, meu
              amor!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
