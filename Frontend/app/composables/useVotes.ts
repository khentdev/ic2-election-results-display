
export const useVotes = () => {
    const results = useQueries({
        queries: [{
            queryFn: () => votesService.getVotes({ position: "President", election_batch: 1 }),
            queryKey: ["votes", "President", 1],
            refetchInterval: 60000,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
            staleTime: 60000,
            select: (data: VoteResponseDTO) => {
                return data.data.map((candidate) => ({
                    ...candidate,
                    cand_photo: getCandidateImage(candidate.cand_fullname)
                })).sort((a, b) => b.vote_count - a.vote_count)
            }
        }, {
            queryFn: () => votesService.getVotes({ position: "Vice President", election_batch: 1}),
            queryKey: ["votes", "Vice President", 1],
            refetchInterval: 60000,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
            staleTime: 60000,
            select: (data: VoteResponseDTO) => {
                return data.data.map((candidate) => ({
                    ...candidate,
                    cand_photo: getCandidateImage(candidate.cand_fullname)
                })).sort((a, b) => b.vote_count - a.vote_count)
            }
        }]
    })

    const isPending = computed(() => results.value.some(r => r.isPending))
    const isRefetching = computed(() => results.value.some(r => r.isRefetching))
    const isRefetchingInBackground = computed(() => results.value.some(r => r.isRefetching && !r.isPending))

    const isError = computed(() => results.value.some(r => r.isError))
    const isBothError = computed(() => results.value.every(r => r.isError))

    const isOnline = useOnline()
    const isOffline = computed(() => !isOnline.value)

    const getPresidentsData = computed(() => results.value[0].data || [])
    const getVicePresidentsData = computed(() => results.value[1].data || [])

    const refetch = () => {
        if (isRefetching.value) return
        return results.value.forEach(r => r.refetch())
    }

    return {
        getPresidentsData,
        getVicePresidentsData,
        isPending,
        isError,
        isBothError,
        isOffline,
        isRefetching,
        isRefetchingInBackground,
        refetch
    }

}