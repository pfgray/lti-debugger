import { pipe } from 'fp-ts/lib/function'
import { ADT, match } from 'ts-adt'
import * as RR from 'fp-ts/ReadonlyRecord'
import * as RA from 'fp-ts/ReadonlyArray'
import * as React from 'react'
import ReactJson from 'react-json-view'
import { ParamFormat } from './requestHelpers'

export const json =
  (name: string) =>
  (value: object): ParamFormat => ({ _type: 'json', name, value })
export const str =
  (name: string) =>
  (value: string): ParamFormat => ({ _type: 'str', name, value })

type ParametersProps = {
  parameters: ReadonlyArray<ParamFormat>
}

export const Parameters = (props: ParametersProps) => (
  <div className="p-1">
    {pipe(
      props.parameters,
      RA.map(
        match({
          json: (j) => (
            <div className="flex flex-col text-xs" key={j.name}>
              <div className="font-bold">{j.name}:</div>
              <ReactJson
                src={j.value}
                name="payload"
                collapsed={1}
                enableClipboard={false}
                displayObjectSize={false}
                displayDataTypes={false}
                style={{
                  fontSize: '0.65rem',
                  overflowX: 'auto',
                }}
              ></ReactJson>
            </div>
          ),
          str: (s) => (
            <div className="text-xs" key={s.name}>
              <span className="font-bold mr-1">{s.name}:</span>
              <span>{s.value}</span>
            </div>
          ),
        })
      )
    )}
  </div>
)
