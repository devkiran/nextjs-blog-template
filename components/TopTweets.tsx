import { TwitterTweetEmbed } from "react-twitter-embed";
import tweets from "data/tweets";

const TopTweets = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-700">Top Tweets</h2>
      <div className="md: grid grid-cols-1 gap-x-2 md:grid-cols-2">
        {tweets.map((tweetId) => (
          <TwitterTweetEmbed tweetId={tweetId} key={tweetId} />
        ))}
      </div>
    </>
  );
};

export default TopTweets;
