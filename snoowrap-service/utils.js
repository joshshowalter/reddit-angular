const corePayload = (data) => {
  const {
    name,
    score,
    selftext,
    subreddit, 
    title,
    ...rest
  } = data;
  return { name, score, selftext, subreddit, title };
}

module.exports = { corePayload };