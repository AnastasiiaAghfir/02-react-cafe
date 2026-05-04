import type { Votes } from '../../types/Votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}

export default function VoteStats(votes: VoteStatsProps) {
    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>{votes.votes.good}</strong></p>
            <p className={css.stat}>Neutral: <strong>{ votes.votes.neutral}</strong></p>
            <p className={css.stat}>Bad: <strong>{votes.votes.bad}</strong></p>
            <p className={css.stat}>Total: <strong>{ votes.totalVotes}</strong></p>
            <p className={css.stat}>Positive: <strong>{ votes.positiveRate}%</strong></p>
        </div>
    )
}


