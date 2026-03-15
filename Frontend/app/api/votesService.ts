import type { VoteResponseDTO, VoteQueryParams } from "./types";

export const votesService = {
    getVotes: async ({ election_batch = 1, position }: VoteQueryParams) => {
        const config = useRuntimeConfig();
        return await $fetch<VoteResponseDTO>(config.public.apiBase, { query: { election_batch, position }, method: "GET" })
    }
}