
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

export type CandidatePositions = "President" | "Vice President"

export type VoteQueryParams = { position: CandidatePositions, election_batch: number }

export interface AnonymousCardVoteProps {
    candidate: {
        cand_id: string | number;
        vote_count: number;
        percentage: string | number;
    };
    index: number;
    nomineeType: string;
}

export interface CandidateCardProps {
    candidate: {
        cand_id: number;
        cand_fullname: string;
        cand_photo: string;
        cand_partylist: string;
        cand_position: CandidatePositions;
        vote_count: number;
        percentage: string;
    };
    index: number;
}
