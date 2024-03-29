const sendCallBackMail = require("../../controller/sendCallBackMail");

const requestCallBack = async (req, res) => {
  let errorCode = null;
  try {
    const { name, mobile, preferredSlot } = req.body;
    await sendCallBackMail("vikrant4514@gmail.com", {
      name,
      mobile,
      preferredSlot,
    });
    res.status(200).json({ success: "true", message: "Call Back registered" });
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
module.exports = requestCallBack;
