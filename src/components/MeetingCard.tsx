import React from 'react'
import { Doc } from "../../convex/_generated/dataModel";

type Interview = Doc<"interviews">;

function MeetingCard({ interview }: { interview: Interview }) {
  return (
    <div>MeetingCard</div>
  )
}

export default MeetingCard