import ToggleButton from "@/components/ui/ToggleButton";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import JsxParser from "react-jsx-parser";
import { BsCopy } from "react-icons/bs";
import { LuCopyCheck } from "react-icons/lu";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type TCardContainer = {
  title: string;
  description: string;
  jsxCodeString: string;
  bindings?: Record<string, unknown>;
  components?: Record<
    string,
    | React.ComponentType<object>
    | React.ExoticComponent<object>
    | (() => React.ReactNode)
  >;
};

const CardContainer = ({
  title,
  description,
  jsxCodeString,
  bindings = {}, // ✅ FIXED HERE
  components = {}, // Default components to an empty object if not passed
}: TCardContainer) => {
  const [showCode, setShowCode] = useState(false);
  const [copy, setCopy] = useState(false);

  return (
    <div className="bg-white rounded-lg p-5 shadow-md shadow-slate-200 w-full">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-slate-700 font-medium text-base mb-3">{title}</h3>
        <ToggleButton showCode={showCode} setShowCode={setShowCode} />
      </div>
      <p className="w-1/2 text-sm text-[#62748e]">{description}</p>
      <div className="mb-5 mt-5">
        <JsxParser
          components={components}
          bindings={bindings}
          jsx={jsxCodeString}
        />
      </div>
      {showCode && (
        <div className="h-80 border-red-500">
          <div className="bg-[#0b0b09] rounded-t-[10px] flex flex-row items-center justify-between py-2 px-5 font-semibold text-white">
            <h5 className="">Example</h5>
            {copy ? (
              <button onClick={() => setCopy(false)} className="">
                <LuCopyCheck />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCopy(true);
                  navigator.clipboard.writeText(jsxCodeString);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
                className=""
              >
                <BsCopy />
              </button>
            )}
          </div>
          <SyntaxHighlighter
            customStyle={{
              borderRadius: "0 10px",
              padding: "20px",
              height: "calc(100% - 40px)",
              overflowY: "auto",
            }}
            language="javascript"
            style={atomOneDark}
            wrapLongLines={true}
            // showLineNumbers={true}
          >
            {jsxCodeString}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
export default CardContainer;
