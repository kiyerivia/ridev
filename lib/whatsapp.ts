export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282226800063";
export const OFFICIAL_EMAIL = process.env.NEXT_PUBLIC_EMAIL || "kiyerivia@gmail.com";

export function createWhatsAppLink(message: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

export function getPackageWhatsAppMessage(
  packageName: string,
  priceText: string,
  targetUse: string
): string {
  return `Halo RIDEV (Rivia Developer), saya tertarik untuk memesan:
📦 *Paket: ${packageName}* (${priceText})
🎯 *Kebutuhan:* ${targetUse}

Bisa minta informasi lebih lanjut dan konsultasi detail alur pengerjaannya? Terima kasih!`;
}

export function getGeneralConsultationMessage(service?: string): string {
  if (service) {
    return `Halo RIDEV (Rivia Developer), saya ingin konsultasi mengenai layanan *${service}*. 
Mohon info estimasi biaya dan portofolio terkait. Terima kasih!`;
  }
  return `Halo RIDEV (Rivia Developer), saya tertarik dengan jasa pembuatan website/aplikasi profesional. 
Saya ingin konsultasi mengenai kebutuhan proyek bisnis saya. Terima kasih!`;
}

export function getCalculatorWhatsAppMessage(params: {
  projectType: string;
  pages: number;
  selectedFeatures: string[];
  estimatedTotal: number;
  deliverySpeed: string;
}): string {
  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);

  const featuresList =
    params.selectedFeatures.length > 0
      ? params.selectedFeatures.map((f) => `• ${f}`).join("\n")
      : "• Standar Package";

  return `Halo RIDEV (Rivia Developer), saya telah melakukan simulasi di *Kalkulator Biaya Website/Aplikasi*:

🚀 *Jenis Proyek:* ${params.projectType}
📄 *Jumlah Halaman:* ±${params.pages} Halaman
⏱️ *Kecepatan Pengerjaan:* ${params.deliverySpeed}
⚙️ *Fitur yang Dipilih:*
${featuresList}

💰 *Estimasi Total:* *${formatRupiah(params.estimatedTotal)}*

Bisa bantu review kebutuhan ini dan mulai tahapan konsultasi detailnya? Terima kasih!`;
}
