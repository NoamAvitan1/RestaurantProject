import React, { useRef, useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import Loading from "./Loading";
import Typewriter from "typewriter-effect";
import TextCode from "./TextCode";
import TextArea from "./TextArea";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
export default function Home() {
  const gptref = useRef();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataInfo, setDataInfo] = useState([]);
  const [dataInfoDallE, setDataInfoDallE] = useState([]);
  const doApiDallE = async () => {
    setLoading(true);
    const { data } = await openai.createImage({
      prompt: gptRef.current.value,
      n: 10,
      size: "1024x1024",
    });
    setDataInfoDallE(data.data);
    setDataInfoGpt([]);
    gptRef.current.value = "";
    setLoading(false);
  };
  const doApiGpt = async () => {
    setLoading(true);
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: gptref.current.value,
      temperature: 0.7,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const obj = {
      question: gptref.current.value,
      answer: data.choices[0].text,
    };
    console.log(data.choices[0].text);
    setDataInfo([...dataInfo, obj]);
    gptref.current.value = "";
    setLoading(false);
  };
  return (
    <div>
      {!show ? (
        <div className=" py-[30px]  container mx-auto lg:max-w-[1024px] max-w-[440px]">
          <h2 className="text-5xl font-medium leading-tight">Chat GPT</h2>
          <div className=" relative">
            <TextArea
              doApi={doApiGpt}
              placeholder={"Ask me question..."}
              searchRef={gptref}
            />
            {loading && <Loading />}
            <button className="btn mt-2">Dall-E2</button>
          </div>
          {[...dataInfo].reverse().map((res, i) => (
            <div
              key={i}
              className="p-[20px] border-dotted px-[20px] mt-5 bg-slate-700 rounded-3xl border text-white"
            >
              <pre className="text-[1.2em] mb-3">Question : {res.question}</pre>
              <TextCode text={res.answer} TextAnim={i == 0 ? true : false} />
            </div>
          ))}
        </div>
      ) : (
        <div className=" py-[30px]  container mx-auto lg:max-w-[1024px] max-w-[440px]">
          <h2 className="text-5xl font-medium leading-tight">Dall-E2</h2>
          <div className=" relative">
            <TextArea
              doApi={doApiGpt}
              placeholder={"Ask me question..."}
              searchRef={gptref}
            />
            {loading && <Loading />}
            <button onClick={() => setShow(!show)} className="btn mt-2">
              Chat GPT
            </button>
          </div>
          {[...dataInfo].reverse().map((res, i) => (
            <div
              key={i}
              className="p-[20px] border-dotted px-[20px] mt-5 bg-slate-700 rounded-3xl border text-white"
            >
              <pre className="text-[1.2em] mb-3">Question : {res.question}</pre>
              <TextCode text={res.answer} TextAnim={i == 0 ? true : false} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
