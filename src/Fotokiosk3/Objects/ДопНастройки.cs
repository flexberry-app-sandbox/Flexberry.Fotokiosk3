﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fotokiosk3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Доп настройки.
    /// </summary>
    // *** Start programmer edit section *** (ДопНастройки CustomAttributes)

    // *** End programmer edit section *** (ДопНастройки CustomAttributes)
    [AutoAltered()]
    [Caption("Доп настройки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДопНастройкиE", new string[] {
            "Уголок as \'Уголок\'",
            "ЧбЦвет as \'Чб цвет\'"})]
    public class ДопНастройки : ICSSoft.STORMNET.DataObject
    {
        
        private bool fУголок;
        
        private bool fЧбЦвет;
        
        private IIS.Fotokiosk3.СделатьФото fСделатьФото;
        
        // *** Start programmer edit section *** (ДопНастройки CustomMembers)

        // *** End programmer edit section *** (ДопНастройки CustomMembers)

        
        /// <summary>
        /// Уголок.
        /// </summary>
        // *** Start programmer edit section *** (ДопНастройки.Уголок CustomAttributes)

        // *** End programmer edit section *** (ДопНастройки.Уголок CustomAttributes)
        public virtual bool Уголок
        {
            get
            {
                // *** Start programmer edit section *** (ДопНастройки.Уголок Get start)

                // *** End programmer edit section *** (ДопНастройки.Уголок Get start)
                bool result = this.fУголок;
                // *** Start programmer edit section *** (ДопНастройки.Уголок Get end)

                // *** End programmer edit section *** (ДопНастройки.Уголок Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДопНастройки.Уголок Set start)

                // *** End programmer edit section *** (ДопНастройки.Уголок Set start)
                this.fУголок = value;
                // *** Start programmer edit section *** (ДопНастройки.Уголок Set end)

                // *** End programmer edit section *** (ДопНастройки.Уголок Set end)
            }
        }
        
        /// <summary>
        /// ЧбЦвет.
        /// </summary>
        // *** Start programmer edit section *** (ДопНастройки.ЧбЦвет CustomAttributes)

        // *** End programmer edit section *** (ДопНастройки.ЧбЦвет CustomAttributes)
        public virtual bool ЧбЦвет
        {
            get
            {
                // *** Start programmer edit section *** (ДопНастройки.ЧбЦвет Get start)

                // *** End programmer edit section *** (ДопНастройки.ЧбЦвет Get start)
                bool result = this.fЧбЦвет;
                // *** Start programmer edit section *** (ДопНастройки.ЧбЦвет Get end)

                // *** End programmer edit section *** (ДопНастройки.ЧбЦвет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДопНастройки.ЧбЦвет Set start)

                // *** End programmer edit section *** (ДопНастройки.ЧбЦвет Set start)
                this.fЧбЦвет = value;
                // *** Start programmer edit section *** (ДопНастройки.ЧбЦвет Set end)

                // *** End programmer edit section *** (ДопНастройки.ЧбЦвет Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Fotokiosk3.СделатьФото.
        /// </summary>
        // *** Start programmer edit section *** (ДопНастройки.СделатьФото CustomAttributes)

        // *** End programmer edit section *** (ДопНастройки.СделатьФото CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "СделатьФото"})]
        public virtual IIS.Fotokiosk3.СделатьФото СделатьФото
        {
            get
            {
                // *** Start programmer edit section *** (ДопНастройки.СделатьФото Get start)

                // *** End programmer edit section *** (ДопНастройки.СделатьФото Get start)
                IIS.Fotokiosk3.СделатьФото result = this.fСделатьФото;
                // *** Start programmer edit section *** (ДопНастройки.СделатьФото Get end)

                // *** End programmer edit section *** (ДопНастройки.СделатьФото Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДопНастройки.СделатьФото Set start)

                // *** End programmer edit section *** (ДопНастройки.СделатьФото Set start)
                this.fСделатьФото = value;
                // *** Start programmer edit section *** (ДопНастройки.СделатьФото Set end)

                // *** End programmer edit section *** (ДопНастройки.СделатьФото Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДопНастройкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДопНастройкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДопНастройкиE", typeof(IIS.Fotokiosk3.ДопНастройки));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ДопНастройки.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfДопНастройки CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfДопНастройки CustomAttributes)
    public class DetailArrayOfДопНастройки : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Fotokiosk3.DetailArrayOfДопНастройки members)

        // *** End programmer edit section *** (IIS.Fotokiosk3.DetailArrayOfДопНастройки members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ДопНастройки by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ДопНастройки.
        /// </summary>
        public DetailArrayOfДопНастройки(IIS.Fotokiosk3.СделатьФото fСделатьФото) : 
                base(typeof(ДопНастройки), ((ICSSoft.STORMNET.DataObject)(fСделатьФото)))
        {
        }
        
        public IIS.Fotokiosk3.ДопНастройки this[int index]
        {
            get
            {
                return ((IIS.Fotokiosk3.ДопНастройки)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Fotokiosk3.ДопНастройки dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
