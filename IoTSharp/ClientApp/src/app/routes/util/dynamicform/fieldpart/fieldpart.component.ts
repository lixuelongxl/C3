import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { SFComponent, SFObjectWidgetSchema, SFSelectWidgetSchema, SFSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { UIDataType } from 'src/app/routes/common/UIDataType';

@Component({
  selector: 'app-fieldpart',
  templateUrl: './fieldpart.component.html',
  styleUrls: ['./fieldpart.component.less'],
})
export class FieldpartComponent implements OnInit {
  @ViewChild('sf', { static: false }) sf: SFComponent;
  @Output() OnRemove = new EventEmitter<FormField>();
  @Input()
  FormField: FormField;
  @Input()
  AllSuportType: UIDataType[] = [];
  @Input()
  AllControlType: any = [];

  SuportType: any = [];

  DSVisble: boolean = false;
  DefaultVisble: boolean = false;
  constructor(private http: _HttpClient, private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {}

  writeValue(obj: any): void {
    this.FormField = obj;

    //
  }

  registerOnChange(fn: any): void {
    //  this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {

    switch (this.FormField.FieldUIElement) {
      case '1':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '2':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '3':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '4':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '5':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '6':
        this.DSVisble = true;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '7':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '8':
        this.DSVisble = true;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '9':
        this.DSVisble = false;
        this.FormField.schema.properties.IotSharp.properties.format.ui = {
          widget: 'select',
          change: (x, y) => {
            this.GetTargetType('9', x);
          },
        };
        console.log(this.FormField.schema.properties.IotSharp.properties.format.ui);
        this.GetTargetType(this.FormField.FieldUIElement, this.FormField.schema.properties.IotSharp.properties.format.default);

        break;
      case '10':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '11':
        this.DSVisble = false;

        if (this.FormField.schema.properties.ui.properties.range) {
          this.GetTargetType(this.FormField.FieldUIElement, 'true');
        } else {
          this.GetTargetType(this.FormField.FieldUIElement, 'false');
        }

        break;
      case '12':
        this.DSVisble = true;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '13':
        this.DSVisble = true;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '14':
        this.DSVisble = true;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '15':
        this.DSVisble = true;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '16':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '17':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '18':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
      case '19':
        this.DSVisble = false;
        this.GetTargetType(this.FormField.FieldUIElement, '');
        break;
    }
    this.cd.detectChanges();
  }

  getData() {}

  remove(e) {
    this.OnRemove.emit(this.FormField);
  }

  submit(): void {
    this.FormField.formdata = this.sf.value;
  }
  dtpChange(value: string) {
    this.FormField.FieldNamenzValidateStatus = '';
  }
  dtcChange(value: string) {
    this.FormField.FieldCodenzValidateStatus = '';
  }

  GetTargetType(type: string, format: string) {
    switch (type) {
      case '1':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '1' || c.value === '2' || c.value === '3' || c.value === '9');
        break;
      case '2':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
        break;
      case '3':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
        break;
      case '4':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
        break;

      case '5':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '13');
        break;
      case '6':
        this.SuportType = this.AllSuportType.filter(
          (c) => c.value === '6' || c.value === '7' || c.value === '8' || c.value === '10' || c.value === '12',
        );
        break;
      case '7':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
        break;
      case '8':
        this.SuportType = this.AllSuportType.filter(
          (c) => c.value === '1' || c.value === '2' || c.value === '3' || c.value === '4' || c.value === '9',
        );
        break;

      case '9':
        switch (format) {
          case 'date-time':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '5' || c.value === '15');
            break;
          case 'date':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '5' || c.value === '4' || c.value === '15');
            break;
          case 'month':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '5' || c.value === '4' || c.value === '15');
            break;
          case 'yyyy':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '1');
            console.log(format);
            break;
          case 'week':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
            break;
          case 'range':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '11' || c.value === '7'); //ranger???????????? DataTime???String???
            break;
          case 'Inline':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '5' || c.value === '4' || c.value === '15');
            break;
        }

        break;
      case '10':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
        break;
      case '11':
        switch (format) {
          case 'true':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '6' || c.value === '8' || c.value === '10' || c.value === '12');

            break;
          case 'false':
            this.SuportType = this.AllSuportType.filter((c) => c.value === '1' || c.value === '2' || c.value === '3' || c.value === '9');

            break;
        }

        break;

      case '12':
        this.SuportType = this.AllSuportType.filter(
          (c) => c.value === '1' || c.value === '2' || c.value === '3' || c.value === '4' || c.value === '9',
        );
        break;
      case '13':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '6' || c.value === '8' || c.value === '7' || c.value === '12');
        break;
      case '14':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '6' || c.value === '8' || c.value === '7' || c.value === '12');
        break;
      case '15':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '6' || c.value === '8' || c.value === '7' || c.value === '12');
        break;
      case '16':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '14');
        break;
      case '17':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
        break;
      case '18':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '4');
        break;
      case '19':
        this.SuportType = this.AllSuportType.filter((c) => c.value === '1' || c.value === '2' || c.value === '3' || c.value === '9');
        break;
    }

    //  this.AllSuportType.filter(c=>c.value===)
    // this.http.get('api/common/dictionaryservice/gettargettype?id=' + type + '&format=' + format).subscribe(
    //   (x) => {
    //     this.AllSuportType = x.Result;
    //   },
    //   (y) => {},
    //   () => {},
    // );
  }

  FormFieldUITypeChange(value: string) {
    switch (value) {
      case '1':
        this.FormField.schema.properties = {
          // exclusiveMinimum: {
          //   type: 'boolean',
          //   title: '????????????????????????',
          // },
          // exclusiveMaximum: {
          //   type: 'boolean',
          //   title: '????????????????????????',
          // },

          minimum: {
            type: 'number',
            title: '?????????',
            maxLength: 20,
            minLength: 1,
          },
          maximum: {
            type: 'number',
            title: '?????????',
            maxLength: 20,
            minLength: 1,
          },
          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              widgetWidth: {
                type: 'number',
                title: '??????',
                default: 400,
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.sf.refreshSchema();
        this.GetTargetType(value, '');
        this.DSVisble = false;
        break;
      case '2':
        this.FormField.schema.properties = {
          maxLength: {
            type: 'number',
            title: '??????????????????',
          },

          pattern: {
            type: 'string',
            title: '?????????????????????',
            maxLength: 100,
            minLength: 1,
            default: '',
          },

          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              addOnAfter: {
                type: 'string',
                title: '??????',
                maxLength: 20,
                minLength: 1,
                default: '',
              },
              placeholder: {
                type: 'string',
                title: 'placeholder',
                maxLength: 20,
                minLength: 1,
                default: '',
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.sf.refreshSchema();
        this.DSVisble = false;
        this.GetTargetType(value, '');
        break;
      case '3':
        this.FormField.schema.properties = {};
        this.DSVisble = false;
        this.sf.refreshSchema();
        break;
      case '4':
        this.FormField.schema.properties = {};
        this.sf.refreshSchema();
        this.DSVisble = false;
        this.GetTargetType(value, '');
        break;
      case '5':
        this.FormField.schema.properties = {
          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              checkedChildren: {
                type: 'string',
                title: '?????????',
                maxLength: 20,
                minLength: 1,
              },
              unCheckedChildren: {
                type: 'string',
                title: '?????????',
                maxLength: 20,
                minLength: 1,
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.sf.refreshSchema();
        this.DSVisble = false;
        this.GetTargetType(value, '');
        this.DSVisble = false;
        break;
      case '6':
        this.FormField.schema.properties = {
          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              span: {
                type: 'number',
                title: '???????????????????????????',
              },
              styleType: {
                type: 'string',
                title: 'radio?????????',
                enum: [
                  { label: '??????', value: 'default' },
                  { label: '??????', value: 'button' },
                ],
              },
              checkAll: {
                type: 'boolean',
                title: '??????????????????',
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };

        this.sf.refreshSchema();
        this.GetTargetType(value, '');
        this.DSVisble = true;
        break;
      case '7':
        this.FormField.schema.properties = {
          // format: {
          //   type: 'string',
          //   title: '????????????',

          //   maxLength: 20,
          //   minLength: 1,
          // },

          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              format: {
                type: 'string',
                title: '????????????',
              },
              use12Hours: {
                type: 'boolean',
                title: '????????????12??????',
              },
              size: {
                type: 'number',
                title: '??????',
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = false;
        break;
      case '8':
        this.FormField.schema.properties = {
          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              styleType: {
                type: 'string',
                title: 'radio ?????????',
                enum: [
                  { label: '??????', value: 'default' },
                  { label: '??????', value: 'button' },
                ],
              },
              buttonStyle: {
                type: 'boolean',
                title: 'Button????????????',
                enum: [
                  { label: 'outline', value: 'outline' },
                  { label: 'solid', value: 'solid' },
                ],
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = true;
        break;
      case '9':
        this.FormField.schema.properties = {
          IotSharp: {
            title: '????????????',
            type: 'object',

            ui: {
              change: (item) => {
                console.log(item);
                this.GetTargetType(value, item);
              },
              type: 'card',
            } as SFObjectWidgetSchema,
            properties: {
              format: {
                type: 'string',
                title: '??????',
                enum: [
                  { label: '????????????', value: 'date-time' },
                  { label: '??????', value: 'date' },
                  { label: '??????', value: 'month' },
                  { label: '???', value: 'yyyy' },
                  { label: '???', value: 'week' },
                  { label: '??????', value: 'range' },
                  { label: 'Inline??????', value: 'Inline' },
                ],
                ui: {
                  widget: 'select',
                  change: (x, y) => {
                    console.log(x);
                    this.GetTargetType('9', x);
                  },
                },
              },
            },
          },
        };
        this.DSVisble = false;
        this.sf.refreshSchema();
        this.GetTargetType(value, '');
        break;
      case '10':
        this.FormField.schema.properties = {
          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              placeholder: {
                type: 'string',
                title: 'placeholder',
                default: '',
              },
              format: {
                type: 'string',
                title: '???????????????',
                default: 'HH:mm:ss',
              },
              utcEpoch: {
                type: 'boolean',
                title: '??????UTC',
                default: false,
              },
              allowEmpty: {
                type: 'boolean',
                title: '?????????????????????',
                default: true,
              },
              use12Hours: {
                type: 'boolean',
                title: '??????12??????',
                default: false,
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = false;
        break;
      case '11':
        this.FormField.schema.properties = {
          minimum: {
            type: 'number',
            title: '?????????',
          },
          maximum: {
            type: 'number',
            title: '?????????',
          },

          multipleOf: {
            type: 'number',
            title: '???',
          },

          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              range: {
                //?????????????????????Change??????
                type: 'boolean',
                title: '???????????????',
                enum: [
                  { label: '???', value: true },
                  { label: '???', value: false },
                ],
                ui: {
                  widget: 'select',
                  change: (v, orgData) => {
                    if (v) {
                      this.GetTargetType('11', 'true');
                    } else {
                      this.GetTargetType('11', 'false');
                    }
                  },
                } as SFSelectWidgetSchema,
              },
              vertical: {
                type: 'boolean',
                title: '????????????',
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };

        this.sf.refreshSchema();
        this.DSVisble = false;
        break;
      case '12':
        this.FormField.schema.properties = {
          IotSharp: {
            title: '????????????',
            type: 'object',

            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
            properties: {
              allowsearch: {
                type: 'boolean',
                title: '??????????????????',
              },
            },
          },
        };
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = true;
        break;
      case '13':
        this.FormField.schema.properties = {};
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = true;
        break;
      case '14':
        this.FormField.schema.properties = {};
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = true;
        break;
      case '15':
        this.FormField.schema.properties = {};
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = true;
        break;
      case '16':
        this.FormField.schema.properties = {
          // format: {
          //   type: 'string',
          //   title: '????????????',

          //   maxLength: 20,
          //   minLength: 1,
          // },

          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              format: {
                type: 'string',
                title: '????????????',
                enum: [
                  { label: '??????', value: 'select' },
                  { label: '??????', value: 'drag' },
                ],
              },
              text: {
                type: 'string',
                title: '????????????',
                default: '????????????',
              },
              action: {
                type: 'string',
                title: '????????????',
                default: 'api/attachment/upLoaderFile',
              },
              fileSize: {
                type: 'number',
                title: '?????????????????????kb???',
              },
              fileType: {
                type: 'string',
                title: '????????????',
                enum: [
                  { label: '??????', value: '' },
                  { label: 'png', value: 'image/png' },
                  { label: 'jpeg', value: 'image/jpeg' },
                  { label: 'gif', value: 'image/gif' },
                  { label: 'bmp', value: 'image/bmp' },
                ],
              },
              multiple: {
                type: 'boolean',
                title: '???????????????',
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = false;
        break;
      case '17':
        this.FormField.schema.properties = {
          maxLength: {
            title: '??????????????????',
            type: 'number',
          },
          ui: {
            title: 'UI??????',
            type: 'object',
            properties: {
              borderless: {
                title: '????????????',
                type: 'boolean',
                default: false,
              },
              placeholder: {
                title: 'placeholder',
                type: 'string',
                default: '',
              },

              autosize: {
                type: 'object',
                title: '?????????????????????',
                properties: {
                  minRows: {
                    type: 'number',
                    title: '?????????',
                    default: 1,
                  },
                  maxRows: {
                    type: 'number',
                    title: '?????????',
                    default: 3,
                  },
                },
              },
            },
            ui: {
              type: 'card',
            } as SFObjectWidgetSchema,
          },
        };
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = false;
        break;

      case '18':
        this.FormField.schema.properties = {};
        this.sf.refreshSchema();
        this.GetTargetType(value, '');
        this.DSVisble = false;
        break;

      case '19':
        this.FormField.schema.properties = {
          maximum: {
            type: 'number',
            title: '?????????',
          },
          multipleOf: {
            type: 'number',
            title: '????????????',
            enum: [
              { label: '???', value: 0.5 },
              { label: '???', value: 1 },
            ],
          },
        };
        this.GetTargetType(value, '');
        this.sf.refreshSchema();
        this.DSVisble = false;
        break;
    }
  }
}
export class FormField {
  constructor(
    public Key: string,
    public FieldId: Number,
    public FieldName: string,
    public FieldValue: string,
    public FieldValueType: string,
    public FieldValueDataSource: string, //?????????????????????????????????
    public FieldUIElementSchema: string, //??????Schema???
    public FieldUIElement: string,
    public FieldUnit: string,
    public schema: SFSchema, //????????????
    public formdata: any, //Schema ??????
    //  public callback: any, //????????????
    public FieldCode: string,
    public IsRequired: boolean,
  ) {}

  FieldNamenzValidateStatus: string;
  FieldNamenzValidatingTip: string;

  FieldCodenzValidateStatus: string;
  FieldCodenzValidatingTip: string;


  FieldValueTypenzValidateStatus: string;
  FieldValueTypenzValidatingTip: string;
}
