import React, {useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';
import {TaskListProps} from './TaskList.types';
import {FontWeight, Text24} from '@components';
import {TaskDetailModel} from '@models';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';
import {styles} from './TaskList.styles';
import {TaskCard} from '../task-card';

export const TaskList = ({
  tasks,
  isExpanded,
  showCompletedTasks,
  editingTaskId,
  onExpandButtonPress,
  onTaskFocus,
  updateTask,
  header,
  keyboardHeight,
}: TaskListProps): JSX.Element => {
  const flatListRef = React.useRef<FlatList<TaskDetailModel>>(null);

  const flatListOffset = React.useRef<number>(0);

  const onFlatListScroll = useCallback(
    (event: any) => {
      flatListOffset.current = event.nativeEvent.contentOffset.y;
    },
    [flatListOffset],
  );

  const scrollOffset = useCallback((offset: number) => {
    flatListRef.current?.scrollToOffset({
      offset: flatListOffset.current + offset,
      animated: true,
    });
  }, []);

  const renderTask = useCallback(
    ({item}: ListRenderItemInfo<TaskDetailModel>) => {
      const isEditing = editingTaskId === item.id;
      const isExpandedTask = isExpanded && isEditing;
      return (
        <TaskCard
          task={item}
          isEditing={isEditing}
          isExpanded={isExpandedTask}
          onExpandButtonPress={onExpandButtonPress}
          onTaskFocus={onTaskFocus}
          updateTask={updateTask}
          scrollOffset={scrollOffset}
          keyboardHeight={keyboardHeight}
        />
      );
    },
    [
      editingTaskId,
      isExpanded,
      keyboardHeight,
      onExpandButtonPress,
      onTaskFocus,
      scrollOffset,
      updateTask,
    ],
  );

  const showingTasks = useMemo(() => {
    if (!showCompletedTasks) {
      return tasks.filter(task => !task.isCompleted);
    }

    return tasks.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }
      return 0;
    });
  }, [showCompletedTasks, tasks]);

  return (
    <FlatList
      ref={flatListRef}
      data={showingTasks}
      renderItem={renderTask}
      ListHeaderComponent={
        <>
          {header}
          <Text24 weight={FontWeight.SemiBold} style={styles.header}>
            Your Tasks
          </Text24>
        </>
      }
      onScroll={onFlatListScroll}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
