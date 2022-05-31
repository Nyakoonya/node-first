/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import crypto from "crypto";

export default function encode(data) {
  const key = "nyako";
  const cipher = crypto.createCipher("aes192", key);
  var crypted = cipher.update(data, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}
