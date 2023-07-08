import Link from "../models/Link.js";

const source = "0123456789abcdefghijklmnopqrstuvwxyx";

const getRandomLink = () => {
  let l = "";
  for (let i = 0; i < 6; i++) {
    l += source[Math.floor(Math.random() * source.length)];
  }
  return l;
};
export const getShortUrl = async (req, res) => {
  try {
    const userLink = req.query.url;
    let urlData = await Link.findOne({ originalUrl: userLink });
    if (!urlData) {
      const shortLink = getRandomLink();
      const newUrlData = {
        originalUrl: userLink,
        shortUrl: shortLink,
      };
      urlData = await Link.create(newUrlData);
      await urlData.save();
      res.status(201).json({
        success: true,
        urlData,
      });
    } else {
      res.status(200).json({
        success: true,
        urlData,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const directToUrl = async (req, res) => {
  try {
    const shortUrl = req.params.url;

    const urlData = await Link.findOne({ shortUrl: shortUrl });
    if (!urlData) {
      res.status(404).json({
        success: false,
        message: "Please enter valid url",
      });
    }
    const originalUrl = urlData.originalUrl;
    res.redirect(originalUrl);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
