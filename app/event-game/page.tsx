/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Image from "next/image"
import BidAndBlitz from "@/public/images/bid-and-blitz.png"

import Navigation from "../Navigation"

function Eventgame() {
  return (
    <>
      <div className="flex justify-center">
        <Navigation />
      </div>
      <div className="m-auto mt-6 w-full  max-w-screen-md">
        <Image
          src={BidAndBlitz}
          color="black"
          width={"320"}
          height={"320"}
          alt="event-game"
          className="m-auto"
        />
        <div className="markdown prose dark:prose-invert dark mb-28 mt-6 w-full break-words">
          <p className="mb-4 text-center">
            <strong className="text-center text-4xl">
              Auction Game Instructions:
            </strong>
          </p>
          <ol>
            <li>
              <p>
                <strong>Resource Allocation:</strong> Each participant is given
                1000 coins as their initial resource for bidding.
              </p>
            </li>
            <li>
              <p>
                <strong>Auction Rounds:</strong> The game consists of multiple
                auction rounds. In each round, an item to be auctioned will be
                announced, which is a quiz question worth a certain number of
                points.
              </p>
            </li>
            <li>
              <p>
                <strong>Bidding Process:</strong>
              </p>
              <ul>
                <li>
                  The auctioneer announces the quiz question and the starting
                  bid for the round.
                </li>
                <li>
                  Participants signal their interest in bidding by raising their
                  paddle or indicating their bid amount.
                </li>
                <li>
                  Bidding proceeds in incremental amounts, with participants
                  placing bids higher than the current leading bid.
                </li>
                <li>
                  The auctioneer announces each bid as it is made and warns when
                  the item is about to be sold.
                </li>
                <li>
                  If no further bids are made, the auctioneer declares the item
                  sold to the highest bidder.
                </li>
                <li>
                  Participants must pay their bid amount immediately, deducted
                  from their initial 1000 coins resource.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Point Calculation:</strong>
              </p>
              <ul>
                <li>
                  The points worth of the quiz question increase with each
                  round. For example, in round 1, the quiz question may be worth
                  100 points, in round 2, it may be worth 200 points, and so on.
                </li>
                <li>
                  The points earned for correctly answering the quiz question
                  are added to the participant's total points.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Winner Determination:</strong>
              </p>
              <ul>
                <li>
                  At the end of all auction rounds, participants' total points
                  earned from answering quiz questions are calculated.
                </li>
                <li>
                  The participant with the highest total points is declared the
                  winner of the auction game.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Settlement and Reward:</strong>
              </p>
              <ul>
                <li>
                  The winner receives a prize or recognition for their
                  achievement.
                </li>
                <li>
                  In case of tie, additional tie-breaker rounds or criteria may
                  be applied to determine the ultimate winner.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Additional Rules:</strong>
              </p>
              <ul>
                <li>
                  Participants cannot bid more than their current resource of
                  1000 coins.
                </li>
                <li>
                  Once a participant's resource is exhausted, they cannot
                  participate in further bidding rounds.
                </li>
                <li>
                  Participants must adhere to the auctioneer's instructions and
                  maintain decorum during the bidding process.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            With these instructions, participants can engage in the auction
            game, bidding for the opportunity to answer quiz questions and earn
            points to emerge as the ultimate winner.
          </p>
        </div>
      </div>
    </>
  )
}

export default Eventgame
