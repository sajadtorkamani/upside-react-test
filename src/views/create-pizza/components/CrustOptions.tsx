import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Subheading } from '../../../components/typography';
import { PIZZA_CRUSTS } from '../../../data';
import { CrustOption } from '../../../types';
import { StoreState } from '../../../store';
import { selectedCrustSelector } from '../../../store/selectors';
import { chooseCrust } from '../../../actions';
import Option from './Option';
import Options from './Options';

type Props = {
  selectedCrust?: CrustOption;
  onSelect: (crust: CrustOption) => any;
};

class CrustOptions extends Component<Props> {
  render = () => {
    const { selectedCrust, onSelect } = this.props;

    return (
      <Options>
        <Subheading>Crust</Subheading>

        {PIZZA_CRUSTS.map(crust => (
          <Option
            key={crust.id}
            option={crust}
            onSelect={() => onSelect(crust)}
            isSelected={!!selectedCrust && crust.id === selectedCrust.id}
          />
        ))}
      </Options>
    );
  };
}

const mapStateToProps = (state: StoreState) => {
  const selectedCrust = selectedCrustSelector(state);

  return { selectedCrust };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSelect: (crust: CrustOption) => dispatch(chooseCrust(crust))
});

export default connect(mapStateToProps, mapDispatchToProps)(CrustOptions);
