import { XMarkIcon } from '@heroicons/react/24/solid'
import { pipe } from 'fp-ts/lib/function'
import { IO } from 'fp-ts/lib/IO'
import * as O from 'fp-ts/Option'
import * as React from 'react'

type ResizableProps = {
  main: () => React.ReactNode
  drawer: O.Option<React.ReactNode>
  onClose: IO<void>
}

export const ViewWithDetails = (props: ResizableProps) => {
  const leftBoxRef = React.useRef<HTMLDivElement>(null)
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const dragBoxRef = React.useRef<HTMLDivElement>(null)

  // const [dragging, setDragging] = React.useState(false)
  const draggingRef = React.useRef(false)
  const lastMousePositionRef = React.useRef<number>()

  React.useEffect(() => {
    function onMouseDown(event: MouseEvent) {
      if (event.target === dragBoxRef.current) {
        draggingRef.current = true
        lastMousePositionRef.current = event.clientX
      }
    }
    function onMouseUp(event: MouseEvent) {
      draggingRef.current = false
      lastMousePositionRef.current = void 0
    }
    function onMouseMove(event: MouseEvent) {
      if (overlayRef.current && lastMousePositionRef.current) {
        // overlayRef.current.clientWidth = void 0

        // Get x-coordinate of pointer relative to container
        var deltaX = event.clientX - lastMousePositionRef.current

        lastMousePositionRef.current = event.clientX

        const newWidth = overlayRef.current.clientWidth - deltaX

        const newFinalWidth = Math.max(
          Math.min(document.body.clientWidth - 120, newWidth),
          120
        )
        // Resize box A
        // * 8px is the left/right spacing between .handler and its inner pseudo-element
        // * Set flex-grow to 0 to prevent it from growing
        overlayRef.current.style.width = newFinalWidth + 'px'
        // leftBoxRef.current.style.flexGrow = '0'
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const mainBox = (
    <div className="flex flex-col flex-1 pr-1 w-full" ref={leftBoxRef}>
      {props.main()}
    </div>
  )

  return (
    <div className="flex flex-auto flex-row h-full items-stretch">
      {pipe(
        props.drawer,
        O.fold(
          () => mainBox,
          (drawer) => (
            <>
              {mainBox}
              <div
                ref={overlayRef}
                className="absolute top-0 right-0 h-full w-3/4 flex flex-row bg-white"
              >
                <div
                  ref={dragBoxRef}
                  className="bg-gray-900 w-0.5 flex-[0_0_auto] h-full cursor-ew-resize"
                />

                <div className="h-full flex flex-col flex-1 overflow-scroll">
                  <div className="cursor-pointer w-4" onClick={props.onClose}>
                    <XMarkIcon />
                  </div>
                  <div className="w-full">{drawer}</div>
                </div>
              </div>
            </>
          )
        )
      )}
    </div>
  )
}
