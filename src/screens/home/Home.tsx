import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {BaseScreen, FloatingButton, Space} from '@components';
import {
  Greeting,
  Header,
  HighlightedCard,
  SummaryCard,
  TaskList,
} from './layout';
import {IconName, Spacing12, Spacing16} from '@constants';
import {styles} from './Home.styles';
import {useViewModel} from './Home.viewModel';

export const Home = (): JSX.Element => {
  const [showCompletedTasks, setShowCompletedTasks] = useState<boolean>(true);
  const [editingTaskId, setEditingTaskId] = useState<string | undefined>(
    undefined,
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardHeight(event.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const isEditing = useMemo(() => editingTaskId !== undefined, [editingTaskId]);

  const onFinishEditing = useCallback(() => {
    setEditingTaskId(undefined);
    setIsExpanded(false);
  }, []);

  const {state, updateTask, highlightedTask, createTask, finishEditing} =
    useViewModel(onFinishEditing);

  const onFloatingButtonPress = useCallback(() => {
    if (isEditing) {
      finishEditing();
    } else {
      setEditingTaskId(createTask());
    }
  }, [createTask, finishEditing, isEditing]);

  const floatingButtonIcon = isEditing
    ? IconName.IconCommonCheck
    : IconName.IconCommonPlus;

  return (
    <BaseScreen>
      <Header
        showCompleted={showCompletedTasks}
        onShowCompletedChange={value => setShowCompletedTasks(value)}
      />
      <TaskList
        tasks={state.tasks}
        isExpanded={isExpanded}
        editingTaskId={editingTaskId}
        showCompletedTasks={showCompletedTasks}
        onExpandButtonPress={id => {
          setIsExpanded(value => !value);
          setEditingTaskId(id);
        }}
        onTaskFocus={id => setEditingTaskId(id)}
        updateTask={updateTask}
        keyboardHeight={keyboardHeight}
        header={
          <>
            <Greeting />
            <View style={styles.summaryContainer}>
              <SummaryCard
                title="Total Tasks"
                subtitle="Tasks"
                value={state.tasks.length}
                icon={IconName.IconHomeTotal}
              />
              <Space width={Spacing12} />
              <SummaryCard
                title="In Progress"
                subtitle="Done"
                value={state.tasks.filter(task => task.isCompleted).length}
                icon={IconName.IconHomeInProgress}
              />
            </View>
            {highlightedTask && (
              <HighlightedCard
                task={highlightedTask}
                icon={IconName.IconCommonBriefcase}
              />
            )}
            <Space height={Spacing16} />
          </>
        }
      />
      <FloatingButton
        onPress={onFloatingButtonPress}
        icon={floatingButtonIcon}
        keyboardHeight={keyboardHeight}
      />
    </BaseScreen>
  );
};
