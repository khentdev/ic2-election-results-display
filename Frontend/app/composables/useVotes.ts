
export const useVotes = () => {
    const results = useQueries({
        queries: [{
            queryFn: () => votesService.getVotes({ position: "President", election_batch: 2 }),
            queryKey: ["votes", "President", 2],
            refetchInterval: 180000,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 60 * 5 * 1000,
            select: (data: VoteResponseDTO) => {
                return data.data.sort((a, b) => b.vote_count - a.vote_count)
            }
        }, {
            queryFn: () => votesService.getVotes({ position: "Vice President", election_batch: 2 }),
            queryKey: ["votes", "Vice President", 2],
            refetchInterval: 180000,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 60 * 5 * 1000,
            select: (data: VoteResponseDTO) => {
                return data.data.sort((a, b) => b.vote_count - a.vote_count)

            }
        }]
    })

    const isPending = computed(() => results.value.some(r => r.isPending))
    const isError = computed(() => results.value.some(r => r.isError))
    const isRefetching = computed(() => results.value.some(r => r.isRefetching))

    const getPresidentsData = computed(() => results.value[0].data || [])
    const getVicePresidentsData = computed(() => results.value[1].data || [])

    const refetch = () => results.value.forEach(r => r.refetch())

    return {
        getPresidentsData,
        getVicePresidentsData,
        isPending,
        isError,
        isRefetching,
        refetch
    }

}