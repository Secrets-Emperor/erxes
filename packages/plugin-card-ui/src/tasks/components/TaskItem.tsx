import Assignees from '@erxes/ui-cards/src/boards/components/Assignees';
import Details from '@erxes/ui-cards/src/boards/components/Details';
import DueDateLabel from '@erxes/ui-cards/src/boards/components/DueDateLabel';
import Labels from '@erxes/ui-cards/src/boards/components/label/Labels';
import ItemFooter from '@erxes/ui-cards/src/boards/components/portable/ItemFooter';
import EditForm from '@erxes/ui-cards/src/boards/containers/editForm/EditForm';
import { ItemContainer } from '@erxes/ui-cards/src/boards/styles/common';
import { PriceContainer, Right } from '@erxes/ui-cards/src/boards/styles/item';
import { Content } from '@erxes/ui-cards/src/boards/styles/stage';
import { IItem, IOptions } from '@erxes/ui-cards/src/boards/types';
import { renderPriority } from '@erxes/ui-cards/src/boards/utils';
import React from 'react';

type Props = {
  stageId?: string;
  item: IItem;
  onClick?: () => void;
  isFormVisible?: boolean;
  beforePopupClose?: () => void;
  options?: IOptions;
  portable?: boolean;
  onAdd?: (stageId: string, item: IItem) => void;
  onRemove?: (taskId: string, stageId: string) => void;
  onUpdate?: (item: IItem) => void;
};

class TaskItem extends React.PureComponent<Props> {
  renderForm = () => {
    const { item, isFormVisible, stageId } = this.props;

    if (!isFormVisible) {
      return null;
    }

    return (
      <EditForm
        {...this.props}
        stageId={stageId || item.stageId}
        itemId={item._id}
        hideHeader={true}
        isPopupVisible={isFormVisible}
      />
    );
  };

  renderContent() {
    const { item } = this.props;
    const { customers, companies, closeDate, isComplete } = item;

    return (
      <>
        <h5>
          {renderPriority(item.priority)}
          {item.name}
        </h5>

        <Details color="#F7CE53" items={customers || []} />
        <Details color="#EA475D" items={companies || []} />

        <PriceContainer>
          <Right>
            <Assignees users={item.assignedUsers} />
          </Right>
        </PriceContainer>

        <DueDateLabel closeDate={closeDate} isComplete={isComplete} />

        <ItemFooter item={item} />
      </>
    );
  }

  render() {
    const { item, portable, onClick } = this.props;

    if (portable) {
      return (
        <>
          <ItemContainer onClick={onClick}>
            <Content>{this.renderContent()}</Content>
          </ItemContainer>
          {this.renderForm()}
        </>
      );
    }

    return (
      <>
        <Labels labels={item.labels} indicator={true} />
        <Content onClick={onClick}>{this.renderContent()}</Content>
        {this.renderForm()}
      </>
    );
  }
}

export default TaskItem;
