import { useState } from "react";
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'
import type { Votes, VoteType } from '../../types/votes';

export default function App() {

  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const handleVote = (type: VoteType): void => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  }

  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0 
    })
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes ? true : false} />
      {totalVotes ?
      <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={totalVotes === 0 ? 0 : Math.round((votes.good / totalVotes) * 100)} /> :
      <Notification />}
    </div>
  )
}
