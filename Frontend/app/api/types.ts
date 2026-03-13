export interface VoteResponseDTO {
    success: boolean;
    data: {
        cand_id: number;
        cand_fullname: string;
        cand_photo: string;
        cand_partylist: string;
        cand_position: CandidatePositions;
        vote_count: number;
        percentage: string;
    }[];
    params: {
        election_batch: number;
        position: CandidatePositions
    };
    total_votes: number;
}

export type VoteParamsDTO = {
    election_batch: number;
    position: CandidatePositions
}

export type CandidatePositions = "President" | "Vice President"