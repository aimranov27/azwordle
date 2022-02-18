export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Əla!', 'Möhtəşəm!', 'Gözəl!']
export const GAME_COPIED_MESSAGE = 'Oyun mübadilə buferinə kopyalandı'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Kifayət qədər hərf yoxdur'
export const WORD_NOT_FOUND_MESSAGE = 'Söz tapılmadı'
export const HARD_MODE_ALERT_MESSAGE =
  'Çətin rejim yalnız başlanğıcda aktivləşdirilə bilər!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Düzgün söz ${solution} idi`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Daxil et'
export const DELETE_TEXT = 'Sil'
export const STATISTICS_TITLE = 'Statistika'
export const GUESS_DISTRIBUTION_TEXT = 'Təxmin Paylanması '
export const NEW_WORD_TEXT = 'Yeni söz'
export const SHARE_TEXT = 'Paylaş'
export const TOTAL_TRIES_TEXT = 'Ümumi cəhd'
export const SUCCESS_RATE_TEXT = 'Müvəffəqiyyət dərəcəsi'
export const CURRENT_STREAK_TEXT = 'Cari xal'
export const BEST_STREAK_TEXT = 'Ən yaxşı xal'
