import DiaryModule from './diary'
import DiaryController from './diary.controller';
import DiaryComponent from './diary.component';
import DiaryTemplate from './diary.html';

describe('Diary', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DiaryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DiaryController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DiaryTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DiaryComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DiaryTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DiaryController);
      });
  });
});
