// import { useNavigate } from "react-router-dom";
// import { SurahListResponseData } from "@ntq/sdk";
// import { Button } from "@yakad/ui";

// interface RandomSurahButtonProps {
//     surahList: SurahListResponseData;
// }

// const RandomSurahButton = (props: RandomSurahButtonProps) => {
//     const navigate = useNavigate();
//     const surahLength = props.surahList.length;

//     const handleClick = () => {
//         const randomNumber = Math.floor(Math.random() * surahLength);
//         navigate("/quran/" + props.surahList[randomNumber].uuid);
//     };

//     return (
//         <Button variant="outlined" onClick={handleClick}>
//             Random Surah
//         </Button>
//     );
// };

// export default RandomSurahButton;
