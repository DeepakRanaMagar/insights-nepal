// Additional information part in profile section
"use client";
import { UserDataProps } from "@/lib/user-details";

export default function BannerCard({
  user_id,
  timestamp,
  creation_date,
  has_nft_avatar,
  is_private,
  is_verified,
}: UserDataProps) {
  return (
    <div className="flex flex-col gap-1 bg-slate-200">
      <h1 className="text-lg font-bold p-2 pl-10 mb-3">Additional Details</h1>

      {/* User ID */}
      {user_id !== undefined && (
        <div className="p-2 pl-10">
          <p className="text-slate-500">User ID</p>
          <p className="text-xl font-medium">{user_id}</p>
        </div>
      )}

      {/* Creation date */}
      {creation_date !== undefined && (
        <div className="p-2 pl-10">
          <p className="text-slate-500">Joined Date</p>
          <p className="text-xl font-medium">{creation_date}</p>
        </div>
      )}

      {/* Time stamp */}
      {timestamp !== undefined && (
        <div className="p-2 pl-10">
          <p className="text-slate-500">Time Stamp</p>
          <p className="text-xl font-medium">{timestamp}</p>
        </div>
      )}

      {/* Account privacy */}
      {is_private !== undefined && (
        <div className="p-2 pl-10">
          <p className="text-slate-500">Account Privacy</p>
          <p className="text-xl font-medium">
            {is_private === true ? <span>Private</span> : <span>Public</span>}
          </p>
        </div>
      )}

      {/* Account verification */}
      {is_verified !== undefined && (
        <div className="p-2 pl-10">
          <p className="text-slate-500">Account Verification</p>
          <p className="text-xl font-medium">
            {is_verified === true ? (
              <span>Verified</span>
            ) : (
              <span>Not Verified</span>
            )}
          </p>
        </div>
      )}

      {/* NFT avatar */}
      {has_nft_avatar !== undefined && (
        <div className="p-2 pl-10">
          <p className="text-slate-500">NFT Avatar</p>
          <p className="text-xl font-medium">
            {has_nft_avatar === true ? <span>Yes</span> : <span>No</span>}
          </p>
        </div>
      )}
    </div>
  );
}
