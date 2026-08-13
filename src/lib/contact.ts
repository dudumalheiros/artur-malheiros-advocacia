/**
 * Dados de contato do escritório — fonte única de verdade.
 *
 * O número já esteve errado em 6 lugares diferentes (faltando o nono dígito),
 * então tudo que precisa dele importa daqui.
 */

export const PHONE_E164 = "5581996097878";
export const PHONE_DISPLAY = "(81) 99609-7878";

export const EMAIL = "artur@arturmalheiros.adv.br";

export const ADDRESS =
  "Av. República do Líbano, 251, RioMar Trade Center, Torre 1, Sala 1206, Pina — Recife/PE, CEP 51.110-160";

export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(
    "Avenida República do Líbano, 251, RioMar Trade Center, Recife - PE, 51110-160",
  ) +
  "&output=embed";

export const INSTAGRAM_HANDLE = "arturmalheirosadv";

/** Monta um link do WhatsApp com mensagem pré-preenchida. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
