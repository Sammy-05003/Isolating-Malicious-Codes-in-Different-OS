import React from 'react';
import { IsolationTechnique } from '../types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  technique: IsolationTechnique;
}

export const IsolationTechniqueCard: React.FC<Props> = ({ technique }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-2">{technique.name}</h3>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {technique.os}
        </span>
        <span className="inline-block ml-2 bg-green-100 text-green-800 px-2 py-1 rounded">
          {technique.effectiveness}% Effective
        </span>
      </div>
      <p className="text-gray-600 mb-4">{technique.description}</p>
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-semibold mb-2">Implementation Example:</h4>
        <SyntaxHighlighter language="typescript" style={docco}>
          {technique.implementation}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};