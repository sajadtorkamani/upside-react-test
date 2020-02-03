import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PIZZA_SIZES } from '../../../data';
import { Subheading } from '../../../components/typography';
import { chooseSize } from '../../../actions';
import { PizzaOption } from '../../../types';
import { StoreState } from '../../../store';
import { selectedSizeSelector } from '../../../store/selectors';
import Option from './Option';
import Options from './Options';

type Props = {
  selectedSize?: PizzaOption;
  onSelect: (size: PizzaOption) => any;
};

class SizeOptions extends Component<Props> {
  render = () => {
    const { selectedSize, onSelect } = this.props;

    return (
      <Options>
        <Subheading>Size</Subheading>

        {PIZZA_SIZES.map(size => (
          <Option
            key={size.id}
            option={size}
            onSelect={() => onSelect(size)}
            isSelected={!!selectedSize && size.id === selectedSize.id}
          />
        ))}
      </Options>
    );
  };
}

const mapStateToProps = (state: StoreState) => {
  const selectedSize = selectedSizeSelector(state);

  return { selectedSize };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSelect: (size: PizzaOption) => dispatch(chooseSize(size))
});

export default connect(mapStateToProps, mapDispatchToProps)(SizeOptions);
