
const CANDIDATE_IMAGE_MAP: Record<string, string> = {
    quijano: "/candidates/alab_partylist/PRESIDENT - QUIJANO.png",
    añober: "/candidates/alab_partylist/VICE PRESIDENT - AÑOBER.png",
    padul: "/candidates/tagpo_partylist/PRESIDENT - PADUL.jpeg",
    tagud: "/candidates/tagpo_partylist/VICE PRESIDENT - TAGUD.jpg",
} as const;

function normalizeWord(word: string): string {
    return word.toLowerCase().replace(/[^a-záéíóúñü]/g, "")
}

const normalizeMap = Object.fromEntries(
    Object.entries(CANDIDATE_IMAGE_MAP).map(([key, value]) => [normalizeWord(key), value])
)

export function getCandidateImage(fullname: string): string {
    const words = fullname
        .toLowerCase()
        .replace(/[^a-záéíóúñü\s]/g, "")
        .split(/\s+/)
        .filter(Boolean);

    for (const word of words) {
        if (word in normalizeMap) {
            return normalizeMap[word]!;
        }
    }

    return "/image_placeholder.avif";
}
