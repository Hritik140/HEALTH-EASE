import crypto from 'crypto';

export const generateResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  return { resetToken, hashedToken };
};
