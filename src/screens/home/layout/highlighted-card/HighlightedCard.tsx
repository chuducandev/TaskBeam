import React, {useMemo} from 'react';
import {View} from 'react-native';
import {HighlightedCardProps} from './HighlightedCard.types';
import {styles} from './HighlightedCard.styles';
import {FontWeight, Icon, Space, Text16, Text20, Text32} from '@components';
import {Colors, ScreenWidth, Spacing24} from '@constants';
import {getCorrectHourString, getDueDate} from './HighlightedCard.utils';

export const HighlightedCard: React.FC<HighlightedCardProps> = ({
  task,
  icon,
  iconSize = Spacing24,
  style,
}: HighlightedCardProps) => {
  const titleTextStyle = useMemo(() => {
    return [
      styles.headerText,
      {
        width: ScreenWidth - 240,
      },
    ];
  }, []);

  const hourString = useMemo(() => {
    const dueDate = getDueDate(task);
    return getCorrectHourString(
      dueDate?.hours,
      dueDate?.minutes,
      dueDate?.ampm,
    );
  }, [task]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Icon icon={icon} size={iconSize} />
        <Text16
          weight={FontWeight.SemiBold}
          style={titleTextStyle}
          numberOfLines={2}>
          {task.title}
        </Text16>
      </View>
      <Space flex />
      <View style={styles.content}>
        <Text32 weight={FontWeight.SemiBold}>{hourString.split(' ')[0]}</Text32>
        <Text20
          weight={FontWeight.SemiBold}
          style={styles.contentText}
          color={Colors.ChathamsBlueTint03}>
          {hourString.split(' ')[1]}
        </Text20>
      </View>
    </View>
  );
};
