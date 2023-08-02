export enum IconName {
  AppLogo = 'app_logo',

  IconCommonPlus = 'icon_common_plus',
  IconCommonCheck = 'icon_common_check',
  IconCommonCaretRight = 'icon_common_caret_right',
  IconCommonBriefcase = 'icon_common_briefcase',
  IconCommonHouse = 'icon_common_house',

  IconLanguageVietnam = 'icon_language_vietnam',
  IconLanguageEnglish = 'icon_language_english',
  IconLanguageSpanish = 'icon_language_spanish',

  IconHomeInProgress = 'icon_home_in_progress',
  IconHomeTotal = 'icon_home_total',
  IconHomeShowCompleted = 'icon_home_show_completed',
  IconHomeHideCompleted = 'icon_home_hide_completed',
  IconHomeTaskTitle = 'icon_home_task_title',
  IconHomeTaskNotes = 'icon_home_task_notes',
  IconHomeTaskDueDate = 'icon_home_task_due_date',
  IconHomeTaskReminder = 'icon_home_task_reminder',
}

export const Icons: Record<IconName, any> = {
  [IconName.AppLogo]: require('@assets/icons/common/calendar-blank-bold.png'),

  [IconName.IconCommonPlus]: require('@assets/icons/common/plus-bold.png'),
  [IconName.IconCommonCheck]: require('@assets/icons/common/check-bold.png'),
  [IconName.IconCommonCaretRight]: require('@assets/icons/common/caret-right-bold.png'),
  [IconName.IconCommonBriefcase]: require('@assets/icons/common/briefcase-bold.png'),
  [IconName.IconCommonHouse]: require('@assets/icons/common/house-line-bold.png'),

  [IconName.IconLanguageVietnam]: require('@assets/icons/languages/vietnam.png'),
  [IconName.IconLanguageEnglish]: require('@assets/icons/languages/united-kingdom.png'),
  [IconName.IconLanguageSpanish]: require('@assets/icons/languages/spain.png'),

  [IconName.IconHomeInProgress]: require('@assets/icons/home/hourglass-simple-bold.png'),
  [IconName.IconHomeTotal]: require('@assets/icons/home/list-checks-bold.png'),
  [IconName.IconHomeShowCompleted]: require('@assets/icons/home/eye-bold.png'),
  [IconName.IconHomeHideCompleted]: require('@assets/icons/home/eye-closed-bold.png'),
  [IconName.IconHomeTaskTitle]: require('@assets/icons/home/text-aa-bold.png'),
  [IconName.IconHomeTaskNotes]: require('@assets/icons/home/note-bold.png'),
  [IconName.IconHomeTaskDueDate]: require('@assets/icons/home/calendar-bold.png'),
  [IconName.IconHomeTaskReminder]: require('@assets/icons/home/bell-ringing-bold.png'),
};
