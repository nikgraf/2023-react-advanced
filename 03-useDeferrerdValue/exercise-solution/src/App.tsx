import { useDeferredValue, useState } from "react";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

type VerificationCodeProps = { userId: string };

// This is for example really happening in WhatsApp or Signal
// > Iteratively SHA-512 hash the sorted Identity Keys and user identifier 5200 times.
const VerificationCode: React.FC<VerificationCodeProps> = ({ userId }) => {
  const deferredUserId = useDeferredValue(userId);
  if (userId !== deferredUserId) {
    return <>calculating …</>;
  }

  // const t0 = performance.now();
  let hash = naclUtil.decodeUTF8(userId);
  [...Array(520000)].forEach((_, i) => {
    hash = nacl.hash(hash);
  });
  // const t1 = performance.now();
  // console.log(`Call to doSomething took ${(t1 - t0) / 1000} .`);

  return <div>Code: {naclUtil.encodeBase64(hash)}</div>;
};

function App() {
  const [userId, setUserId] = useState(
    "JANEc8071923-cc08-4cd6-aeb2-d0b1ddf29863"
  );

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setUserId("JANEc8071923-cc08-4cd6-aeb2-d0b1ddf29863");
          }}
        >
          Jane
        </button>
        <button
          onClick={() => {
            setUserId("ANNAaf9639e3-ae6e-45d6-856d-46f799718c72");
          }}
        >
          Anna
        </button>
      </div>
      <div>UserId: {userId}</div>
      <VerificationCode userId={userId} />
    </>
  );
}

export default App;
