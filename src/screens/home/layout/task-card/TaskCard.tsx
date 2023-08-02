import React, {useCallback, useEffect, useRef} from 'react';
import {TaskCardProps} from './TaskCard.types';
import {Checkbox, DateTextField, Icon, Space, TextField} from '@components';
import {Animated, Easing, Platform, TextInput, View} from 'react-native';
import {
  IconName,
  ScreenHeight,
  Spacing20,
  Spacing24,
  Spacing30,
  Spacing48,
  Spacing56,
  Spacing64,
  Spacing8,
  TextSize16,
} from '@constants';
import {styles} from './TaskCard.styles';
import {ExpandButton} from '../expand-button';
import {LayoutChangeEvent} from 'react-native/Libraries/Types/CoreEventTypes';

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  isExpanded,
  isEditing,
  onExpandButtonPress,
  onTaskFocus,
  updateTask,
  scrollOffset,
  keyboardHeight,
}: TaskCardProps) => {
  const onTitleFocus = useCallback(
    () => onTaskFocus(task.id),
    [onTaskFocus, task.id],
  );

  const animatedValue = useRef(new Animated.Value(0)).current;
  const titleTextFieldRef = useRef<TextInput>(null);

  const cardOffset = useRef(0);
  const cardHeight = useRef(0);
  const cardRef = useRef<View>(null);

  const onCardLayoutChange = useCallback((event: LayoutChangeEvent) => {
    cardRef.current?.measure((x, y, width, height, pageX, pageY) => {
      cardOffset.current = pageY;
      cardHeight.current = height;
    });
  }, []);

  const containerMaxHeightStyle = {
    maxHeight: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [Spacing56, 1000],
    }),
  };

  const expandedContentMaxHeightStyle = {
    maxHeight: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000],
    }),
  };

  const expandedContentOpacityStyle = {
    opacity: animatedValue,
  };

  const handleOnExpandButtonPress = useCallback(() => {
    if (isExpanded) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start(() => onExpandButtonPress(task.id));
    } else {
      onExpandButtonPress(task.id);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  }, [animatedValue, isExpanded, onExpandButtonPress, task.id]);

  useEffect(() => {
    if (!isEditing && titleTextFieldRef.current) {
      titleTextFieldRef.current.blur();
    }
  }, [isEditing]);

  useEffect(() => {
    if (keyboardHeight > 0 && isEditing) {
      const cardBottomOffset =
        ScreenHeight - (cardOffset.current + cardHeight.current);
      const floatingButtonOffset =
        keyboardHeight + Spacing30 + Spacing64 + Spacing48;
      if (cardBottomOffset < floatingButtonOffset) {
        scrollOffset(floatingButtonOffset - cardBottomOffset);
      }
    }
  }, [keyboardHeight, scrollOffset, isEditing]);

  return (
    <Animated.View
      style={[
        styles.container,
        Platform.OS === 'ios' ? containerMaxHeightStyle : {},
      ]}
      onLayout={onCardLayoutChange}
      ref={cardRef}>
      <View style={styles.row}>
        {isEditing ? (
          <Icon
            icon={IconName.IconHomeTaskTitle}
            size={Spacing20}
            style={styles.icon}
          />
        ) : (
          <Checkbox
            key={task.id}
            defaultValue={task.isCompleted}
            onChangeValue={newCompleted =>
              updateTask(task.id, 'isCompleted', newCompleted)
            }
          />
        )}
        <TextField
          value={task.title}
          style={styles.textField}
          size={TextSize16}
          onFocus={onTitleFocus}
          height={Spacing24}
          placeholder="Task title"
          onChangeText={newTitle => updateTask(task.id, 'title', newTitle)}
          ref={titleTextFieldRef}
        />
        {isEditing && (
          <ExpandButton
            isExpanded={isExpanded}
            onPress={handleOnExpandButtonPress}
          />
        )}
      </View>
      {isExpanded && (
        <Animated.View
          style={[
            expandedContentOpacityStyle,
            Platform.OS === 'ios' ? expandedContentMaxHeightStyle : {},
          ]}>
          <Space height={Spacing8} />
          <View style={styles.row}>
            <Icon
              icon={IconName.IconHomeTaskNotes}
              size={Spacing20}
              style={styles.icon}
            />
            <TextField
              value={task.notes}
              style={styles.textField}
              size={TextSize16}
              height={Spacing24}
              placeholder="Notes"
              onChangeText={newNotes => updateTask(task.id, 'notes', newNotes)}
            />
          </View>
          <Space height={Spacing8} />
          <View style={styles.row}>
            <Icon
              icon={IconName.IconHomeTaskDueDate}
              size={Spacing20}
              style={styles.icon}
            />
            <DateTextField
              defaultValue={task.dueDate}
              style={styles.textField}
              size={TextSize16}
              height={Spacing24}
              onChangeValue={newDueDate =>
                updateTask(task.id, 'dueDate', newDueDate)
              }
            />
          </View>
          <Space height={Spacing8} />
          <View style={styles.row}>
            <Icon
              icon={IconName.IconHomeTaskReminder}
              size={Spacing20}
              style={styles.icon}
            />
            <DateTextField
              defaultValue={task.reminderDate}
              style={styles.textField}
              size={TextSize16}
              height={Spacing24}
              onChangeValue={newReminderDate =>
                updateTask(task.id, 'reminderDate', newReminderDate)
              }
            />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
};
