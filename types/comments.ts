export type Root = Root2[]

export interface Root2 {
  metadata: Metadata
  single_line_comment: SingleLineComment[]
  cont_single_line_comment: ContSingleLineComment[]
  multi_line_comment: MultiLineComment[]
}

export interface Metadata {
  filename: string
  lang: string
  total_lines: number
  total_lines_of_comments: number
  blank_lines: number
  sloc: number
}

export interface SingleLineComment {
  line_number: number
  comment: string
}

export interface ContSingleLineComment {
  start_line: number
  end_line: number
  comment: string
}

export interface MultiLineComment {
  start_line: number
  end_line: number
  comment: string
}
